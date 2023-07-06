export interface SystemHealth {
  status: string;
  components: {
    diskSpace: {
      status: string;
      details: {
        total: number;
        free: number;
        threshold: number;
        exists: boolean;
      };
    };
  };
}
