export interface IssuedReceivedData {
    name: string;
    issued: number;
    received: number;
  }
  
  export interface CategoryDistributionData {
    category: string;
    issued: number;
    received: number;
  }
  
  export interface IssuedOverTimeData {
    date: string;
    issued: number;
  }
  
  export interface ChartsProps {
    data: {
      issuedReceived: IssuedReceivedData[];
      categoryDistribution: CategoryDistributionData[];
      issuedOverTime: IssuedOverTimeData[];
    };
  }
  