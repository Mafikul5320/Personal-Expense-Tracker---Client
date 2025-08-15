import axios from 'axios';
import React from 'react';

const useAxiosSecure = () => {
    const aixiosInstance = axios.create({
  baseURL: 'http://localhost:3000',

});
    return aixiosInstance
};

export default useAxiosSecure;