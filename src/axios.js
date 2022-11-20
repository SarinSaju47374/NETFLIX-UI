import axios from 'axios';
import { base_url } from './constants/constants';
const instance = axios.create({
    baseUrl:base_url,
 });

export default instance;
 