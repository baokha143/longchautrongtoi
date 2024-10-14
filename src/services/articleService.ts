import { HealPageProps } from '@/types/Article';
import axios from 'axios';


const API_URL = 'https://pubapi-stg.fptshop.com.vn/lccus/ci-cms/api/v1/pages/health';

export const fetchHealthData = async (): Promise<HealPageProps> => {
  const response = await axios.get<HealPageProps>(API_URL); // Xác định kiểu trả về ở đây
  return response.data;
};
