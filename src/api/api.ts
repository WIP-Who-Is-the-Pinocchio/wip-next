import axios from 'axios';
// import { Politician, Constituency,PoliticianDetail } from './apiTypes';

const baseUrl = 'http://localhost:2309/wip/public/api/v1';
export const getPoliticiansListData = async () => {
  try {
    const res = await axios.get(`${baseUrl}/politician/list/22?page=0`);
    console.log(res);
    return res;
  } catch (err) {
    console.log('api에러발생' + err);
  }
};

export const getPoliticianSingleData = async (id: number) => {
  try {
    const res = await axios.get(`${baseUrl}/politician/single/${id}`);
    console.log(res);
    return res;
  } catch (err) {
    console.log('api에러발생' + err);
  }
};
