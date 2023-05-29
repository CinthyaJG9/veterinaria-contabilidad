import axios from 'axios';

const URL = 'https://veterinariamap6iv6-production.up.railway.app/api/v1';

export const apiVet = axios.create({
    baseURL: URL,
    headers:{
      'x-token':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIwYjIyMjI3Zi1hZDEyLTRkNDMtYmRlNC1lZTM1ZjVhMGZmMTAiLCJpYXQiOjE2ODUzMjg3OTgsImV4cCI6MTY4NTkzMzU5OH0.ASIdcj93mqhL6duor5OzbTd1IvdS7PIPbZduYrWlSBU'
    }
});

