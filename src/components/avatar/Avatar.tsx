import React from 'react';
import './styles.css'; // Đảm bảo rằng bạn đã import đúng tệp CSS
import avatar from '../../assets/avatar.png'; // Cập nhật đường dẫn đến ảnh avatar của bạn

const AvatarShape = () => {
    return (
        <div className="avatar-container">
            <img src={avatar} alt="Avatar" />
        </div>
    );
};

export default AvatarShape;
