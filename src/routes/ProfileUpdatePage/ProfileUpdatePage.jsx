import { useContext, useState } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from '../../lib/apiRequest';
import {useNavigate} from 'react-router-dom'
import UploadWidget from "../../components/uploadWidget/UploadWidget";
function ProfileUpdatePage() {
    const [error, setError] = useState("");
    const { currentuser  , updateUser} = useContext(AuthContext);
    const [avatar , setAvatar] =  useState([]);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { username, email, password } = Object.fromEntries(formData);

        try {
            const res = await apiRequest.put(`/users/${currentuser.id}`, {
                username,
                email,
                password,
                avatar:avatar[0],
            });
            if (res.data) {
                updateUser(res.data); // Assuming this function updates the user details in the frontend
                navigate('/profile');
                console.log("User updated successfully");
            } else {
                setError("Failed to update user");
            }
        } catch (err) {
            console.log(err);
            setError(err.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="profileUpdatePage">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Update Profile</h1>
                    <div className="item">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            defaultValue={currentuser.username}
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            defaultValue={currentuser.email}
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password" />
                    </div>
                    <button type="submit">Update</button>
                    {error && <span className="error">{error}</span>}
                </form>
            </div>
            <div className="sideContainer">
                <img src={avatar[0]||currentuser.avatar|| "/noavatar.jpeg"} alt="" className="avatar" /> 
                <UploadWidget
                  uwConfig={{
                    cloudName : "dqhmtm2p7",
                    uploadPreset : "estate",
                    multiple : false,
                    maxImageFileSize : 2000000,
                    folder : "avatars"
                  }} 
                  setState={setAvatar}
                />
            </div>
        </div>
    );
}

export default ProfileUpdatePage;
