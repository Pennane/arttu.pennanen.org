export interface Project {
  directory: string;
  url: string;
  custom_url?: boolean;
  name: {
    en: string;
    fi: string;
  };
  description?: {
    en: string;
    fi: string;
  };
  icon?: string;
  date: number;
}
