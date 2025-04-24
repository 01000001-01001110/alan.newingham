import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Job } from '../../../types';

interface TimelineProps {
  jobs: Job[];
}

// Define a type for the peak points
interface PeakPoint {
  x: number;
  y: number;
}

const TimelineContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  overflow-x: auto;
  padding: ${props => props.theme.space.md} 0;
  position: relative;
`;

const TimelineSvg = styled.svg`
  width: 100%;
  min-width: 800px;
  height: 280px;
  display: block;
  margin: 0 auto;
`;

const TimelineBase = styled.line`
  stroke: ${props => props.theme.colors.gray};
  stroke-width: 2;
`;

const TimelineYear = styled.text`
  fill: ${props => props.theme.colors.textSecondary};
  font-size: 12px;
  font-family: ${props => props.theme.fonts.secondary};
`;

interface JobTriangleProps {
  $isActive: boolean;
  $colorIndex: number;
  $zIndex: number;
}

const JobTriangle = styled(motion.path)<JobTriangleProps>`
  fill: ${props => {
    if (props.$isActive) return props.theme.colors.lightBlue;
    
    // First triangle (largest) keeps blueGray color
    if (props.$zIndex === 0) return props.theme.colors.blueGray;
    
    // Smaller triangles get progressively darker colors
    switch(props.$colorIndex % 3) {
      case 0: return props.theme.colors.darkBlue;
      case 1: return props.theme.colors.darkestBlue;
      case 2: return '#1a3b41'; // Even darker shade
      default: return props.theme.colors.darkBlue;
    }
  }};
  stroke: ${props => props.$isActive ? props.theme.colors.lightestBlue : props.theme.colors.gray};
  stroke-width: 1;
  cursor: pointer;
  transition: fill 0.3s, stroke 0.3s;
  filter: ${props => `drop-shadow(0 ${props.$zIndex * 2}px ${props.$zIndex * 1.5}px rgba(0,0,0,0.3))`};
`;

// Animated outline that will trace around the timeline
const AnimatedOutline = styled(motion.path)`
  fill: none;
  stroke: white;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  filter: drop-shadow(0 0 3px rgba(255,255,255,0.7));
`;

const JobTitle = styled.text`
  fill: ${props => props.theme.colors.lightestBlue};
  font-size: 12px;
  font-family: ${props => props.theme.fonts.secondary};
  text-anchor: middle;
  text-shadow: 0 0 3px ${props => props.theme.colors.background};
  font-weight: bold;
`;

const JobDate = styled.text`
  fill: ${props => props.theme.colors.textSecondary};
  font-size: 10px;
  font-family: ${props => props.theme.fonts.secondary};
  text-anchor: middle;
  text-shadow: 0 0 2px ${props => props.theme.colors.background};
`;

// Background halo for text to prevent overlap issues
const TextBackground = styled.rect`
  fill: ${props => props.theme.colors.background};
  opacity: 0.7;
  rx: 4;
  ry: 4;
`;

const TimelineComponent: React.FC<TimelineProps> = ({ jobs }) => {
  const [activeJob, setActiveJob] = useState<string | null>(null);
  const timelineRef = useRef<SVGSVGElement>(null);
  const navigate = useNavigate();
  
  // Sort jobs by start date
  const sortedJobs = [...jobs].sort((a, b) => {
    const aDate = new Date(a.startDate + "-01"); // Add day to ensure valid date
    const bDate = new Date(b.startDate + "-01"); // Add day to ensure valid date
    return aDate.getTime() - bDate.getTime();
  });
  
  // Find the earliest and latest years in the timeline
  const getValidDate = (dateStr: string): Date => {
    // If date is "Present", use current date
    if (dateStr === 'Present') {
      return new Date();
    }
    // Otherwise add "-01" for day if it's just year-month format
    return new Date(dateStr.indexOf('-') > 0 && dateStr.length <= 7 
      ? dateStr + "-01" 
      : dateStr);
  };
  
  const earliestDate = getValidDate(sortedJobs[0]?.startDate || new Date().toISOString());
  const latestDate = getValidDate(sortedJobs[sortedJobs.length - 1]?.endDate === 'Present' 
    ? new Date().toISOString() 
    : sortedJobs[sortedJobs.length - 1]?.endDate || new Date().toISOString());
  
  const startYear = earliestDate.getFullYear();
  const endYear = latestDate.getFullYear() + 1; // Add 1 for some padding
  const totalYears = endYear - startYear;
  
  // Calculate unit width (64px per year, as specified in techContext.md)
  const UNIT_WIDTH = 64;
  const timelineWidth = totalYears * UNIT_WIDTH;
  
  const getXPositionForDate = (dateString: string): number => {
    // Handle "Present" date string
    if (dateString === 'Present') {
      const yearDiff = new Date().getFullYear() - startYear;
      const monthOffset = new Date().getMonth() / 12;
      return (yearDiff + monthOffset) * UNIT_WIDTH;
    }
    
    // Ensure date has a day component
    const formattedDate = dateString.indexOf('-') > 0 && dateString.length <= 7 
      ? dateString + "-01" 
      : dateString;
      
    const date = new Date(formattedDate);
    if (isNaN(date.getTime())) {
      console.error("Invalid date:", dateString);
      return 0;
    }
    
    const yearDiff = date.getFullYear() - startYear;
    const monthOffset = date.getMonth() / 12;
    return (yearDiff + monthOffset) * UNIT_WIDTH;
  };
  
  // Calculate the duration of each job for sizing
  const jobsWithDuration = sortedJobs.map(job => {
    const startX = getXPositionForDate(job.startDate);
    const endX = getXPositionForDate(job.endDate || 'Present');
    const width = endX - startX;
    const durationInMonths = (endX - startX) / UNIT_WIDTH * 12;
    return {
      ...job,
      duration: durationInMonths,
      width,
      startX,
      endX
    };
  });

  // Sort by duration for z-index (largest first)
  const sortedByDuration = [...jobsWithDuration].sort((a, b) => b.duration - a.duration);
  
  const calculateTrianglePath = (job: any, zIndex: number): string => {
    const { startX, endX } = job;
    const width = endX - startX;
    
    // Height is proportional to duration (longer jobs have taller triangles)
    // Add slight variation based on zIndex for depth effect
    const baseHeight = Math.min(110, Math.max(50, job.duration * 2));
    const height = baseHeight - (zIndex * 5); // Slightly smaller as they come forward
    
    // Create a triangle with the base on the timeline
    return `M ${startX},140 L ${startX + width/2},${140 - height} L ${endX},140 Z`;
  };
  
  const handleJobClick = (jobId: string) => {
    setActiveJob(jobId);
    setTimeout(() => {
      navigate(`/experience/${jobId}`);
    }, 300);
  };
  
  useEffect(() => {
    // Reset active job when component mounts
    setActiveJob(null);
  }, []);
  
  // Generate year markers
  const yearMarkers = [];
  for (let year = startYear; year <= endYear; year++) {
    const x = (year - startYear) * UNIT_WIDTH;
    yearMarkers.push(
      <g key={year}>
        <line
          x1={x}
          y1={138} 
          x2={x}
          y2={142}
          stroke={year % 5 === 0 ? "#519ca4" : "#4b5859"}
          strokeWidth={year % 5 === 0 ? 2 : 1}
        />
        {year % 5 === 0 && (
          <TimelineYear x={x} y={160} textAnchor="middle">
            {year}
          </TimelineYear>
        )}
      </g>
    );
  }

  // Calculate text positions to more precisely match triangle positions
  const calculateTextPosition = (job: any, originalIndex: number, zIndex: number) => {
    const { startX, endX } = job;
    const centerX = startX + (endX - startX) / 2;
    
    // For all jobs, determine text position based on job id and triangle size
    // This ensures consistent positioning regardless of order in the array
    
    // Special positioning for each job based on its id to match visual appearance
    // The exact positions are customized for the specific jobs in the timeline
    
    // Adventist Health (longest job - large background mountain)
    if (job.id === 'adventist-health') {
      return {
        centerX,
        titleY: 40,
        dateY: 55
      };
    }
    
    // Embry-Riddle
    else if (job.id === 'embry-riddle') {
      return {
        centerX,
        titleY: 69,  // Lowering by 7px
        dateY: 84    // Lowering by 7px
      };
    }
    
    // Sanford Airport
    else if (job.id === 'sanford-airport') {
      return {
        centerX,
        titleY: 89,  // Lowering by 10px
        dateY: 104   // Lowering by 10px
      };
    }
    
    // Fullsteam LLC
    else if (job.id === 'fullsteam') {
      return {
        centerX,
        titleY: 70,
        dateY: 85
      };
    }
    
    // Cloud Migration Engineer/Freelance
    else if (job.id === 'cloud-migration-engineer') {
      return {
        centerX,
        titleY: 43,  // Raising by 12 more pixels
        dateY: 58    // Raising by 12 more pixels
      };
    }
    
    // Default fallback if id doesn't match known jobs
    // This provides positioning based on z-index (depth)
    let baseY = 60 + (zIndex * 6); // Deeper triangles get higher text
    let dateY = baseY + 15;
    
    return {
      centerX,
      titleY: baseY,
      dateY
    };
  };
  
  // Generate the outline path for the animated stroke that traces the mountain silhouette
  const generateOutlinePath = (): string => {
    // Get all triangles and sort them by x position (left to right)
    const trianglesByX = [...sortedByDuration].sort((a, b) => a.startX - b.startX);
    if (trianglesByX.length === 0) return '';

    // Base Y coordinate for the timeline
    const baseY = 140;

    // Collect all triangle edges (left, peak, right) as line segments
    type Point = { x: number, y: number };
    type Segment = { x1: number, y1: number, x2: number, y2: number };
    const segments: Segment[] = [];

    trianglesByX.forEach((job, idx) => {
      const originalIndex = sortedByDuration.findIndex(j => j.id === job.id);
      const { startX, endX } = job;
      const width = endX - startX;
      const baseHeight = Math.min(110, Math.max(50, job.duration * 2));
      const height = baseHeight - (originalIndex * 5);
      const peakX = startX + width / 2;
      const peakY = baseY - height;

      // Left edge
      segments.push({ x1: startX, y1: baseY, x2: peakX, y2: peakY });
      // Right edge
      segments.push({ x1: peakX, y1: peakY, x2: endX, y2: baseY });
    });

    // Sample X values across the whole timeline (1px step for smoothness)
    const leftEdge = trianglesByX[0].startX;
    const rightEdge = trianglesByX[trianglesByX.length - 1].endX;
    const step = 1;
    const pathPoints: Point[] = [];

    for (let x = leftEdge; x <= rightEdge; x += step) {
      let minY = baseY;
      segments.forEach(seg => {
        // Check if x is between seg.x1 and seg.x2
        if ((seg.x1 <= x && x <= seg.x2) || (seg.x2 <= x && x <= seg.x1)) {
          // Linear interpolation to get y at x
          const t = (x - seg.x1) / (seg.x2 - seg.x1);
          const y = seg.y1 + t * (seg.y2 - seg.y1);
          if (y < minY) minY = y;
        }
      });
      pathPoints.push({ x, y: minY });
    }

    // Start at left base
    let pathData = `M ${leftEdge},${baseY}`;
    // Follow the upper contour
    pathPoints.forEach(pt => {
      pathData += ` L ${pt.x},${pt.y}`;
    });
    // End at right base
    pathData += ` L ${rightEdge},${baseY}`;
    // Close the path
    pathData += ` L ${leftEdge},${baseY}`;

    return pathData;
  };
  
  // Animation for the dash effect
  const [dashLength, setDashLength] = useState(0);
  const [outlinePath, setOutlinePath] = useState('');
  
  useEffect(() => {
    if (sortedByDuration.length > 0) {
      const path = generateOutlinePath();
      setOutlinePath(path);
      
      // Calculate path length for the animation
      // This is approximate since we don't have direct access to the SVG path length
      const perimeter = timelineWidth * 2; // rough estimate
      setDashLength(perimeter);
    }
  }, [sortedByDuration, timelineWidth]);
  
  // Find the cloud migration engineer job for the special white line segment
  const cloudMigrationJob = sortedByDuration.find(job => job.id === 'cloud-migration-engineer');
  const cloudMigrationZIndex = cloudMigrationJob ? sortedByDuration.findIndex(job => job.id === 'cloud-migration-engineer') : -1;
  const cloudMigrationPath = cloudMigrationJob ? calculateTrianglePath(cloudMigrationJob, cloudMigrationZIndex) : '';
  
  return (
    <TimelineContainer>
      <TimelineSvg
        ref={timelineRef}
        viewBox={`0 0 ${timelineWidth} 280`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Year markers */}
        {yearMarkers}
        
        {/* Job triangles - render largest triangles first (background) */}
        {sortedByDuration.map((job, index) => {
          const zIndex = sortedByDuration.length - index - 1; // Largest has lowest z-index (back)
          const { centerX, titleY, dateY } = calculateTextPosition(job, index, zIndex);
          
          return (
            <g key={job.id}>
              <JobTriangle
                d={calculateTrianglePath(job, index)}
                $isActive={activeJob === job.id}
                $colorIndex={index}
                $zIndex={zIndex}
                onClick={() => handleJobClick(job.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                // Remove drop-shadow for cloud-migration-engineer so white line is on top
                style={job.id === 'cloud-migration-engineer' ? { filter: 'none' } : undefined}
              />
              
              {/* Title background for better readability */}
              <TextBackground 
                x={centerX - (job.id === 'cloud-migration-engineer' ? 145 : job.company.length * 3.5)} 
                y={titleY - 10} 
                width={job.id === 'cloud-migration-engineer' ? 290 : job.company.length * 7} 
                height={14} 
              />
              
              <JobTitle
                x={centerX}
                y={titleY}
              >
                {job.id === 'cloud-migration-engineer' ? 'Freelance Cloud Migration Engineer' : job.company}
              </JobTitle>
              
              {/* Date background */}
              <TextBackground 
                x={centerX - 35} 
                y={dateY - 9} 
                width={70} 
                height={12} 
              />
              
              <JobDate
                x={centerX}
                y={dateY}
              >
                {getValidDate(job.startDate).getFullYear()} - {job.endDate === 'Present' ? 'Present' : getValidDate(job.endDate).getFullYear()}
              </JobDate>
            </g>
          );
        })}
        
        {/* Animated white outline that traces the mountain silhouette */}
        {outlinePath && (
          <motion.path
            d={outlinePath}
            fill="none"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="drop-shadow(0 0 6px rgba(255,255,255,1))"
            initial={{ strokeDasharray: dashLength, strokeDashoffset: dashLength, opacity: 1 }}
            animate={{ 
              strokeDashoffset: [dashLength, -dashLength],
              opacity: [1, 1, 0]
            }}
            transition={{
              strokeDashoffset: {
                duration: 12,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              },
              opacity: {
                times: [0, 0.83, 1], // 0-10s: 1, 10-12s: fade to 0
                duration: 12,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }
            }}
          />
        )}
      </TimelineSvg>
    </TimelineContainer>
  );
};

export default TimelineComponent;
