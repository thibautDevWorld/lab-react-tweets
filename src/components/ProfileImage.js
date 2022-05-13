

function ProfileImage(props) {
    
    return (
        <div>
            <img
                src={props.image}
                className="profile"
                alt="Tweet"
            />
        </div>
    );
}

export default ProfileImage;