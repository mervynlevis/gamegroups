import axios from 'axios';

const API = axios.create({baseURL: 'https://gamegroups-backend.herokuapp.com/' })

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

// const url = `https://gamegroups-backend.herokuapp.com/groups`;

export const fetchGroups = () => API.get('/groups');
export const createGroup = (newGroup) => API.post('/groups', newGroup);
export const updateGroup = (id, updatedGroup) => API.patch(`/groups/${id}`, updatedGroup);
export const deleteGroup = (id) => API.delete(`/groups/${id}`);
export const likeGroup = (id) => API.patch(`/groups/${id}/likeGroup`);
export const deleteUserGroups = (id) => API.delete(`/groups/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const deleteUser = (id) => API.delete(`/user/${id}/`);

export const joinGroup = (id, name) => API.patch(`/groups/${id}/${name}/joinGroup`);
export const leaveGroup = (id, name) => API.patch(`/groups/${id}/${name}/leaveGroup`);
