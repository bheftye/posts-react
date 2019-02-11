import axios from 'axios';

const baseUrl = `http://reduxblog.herokuapp.com/api`;
const API_KEY = `?key=YOLOSWAG`;

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

export function fetchPosts(){
    const request = axios.get(`${baseUrl}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callback){
    const request = axios.post(`${baseUrl}/posts${API_KEY}`, values).then(() => callback());
    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPost(id){
    const request = axios.get(`${baseUrl}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(id, callback){
    const request = axios.delete(`${baseUrl}/posts/${id}${API_KEY}`).then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
    };
}