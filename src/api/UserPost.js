const UserPost = async (userinfo) => {

    const requestBody = {
        additionalParameters: userinfo.additionalParameters,
        avatarUrl: userinfo.avatarUrl,
        platformSlug: userinfo.platformSlug,
        platformUserHandle: userinfo.platformUserHandle,
        platformUserId: userinfo.platformUserId,
        platformUserIdentifier: userinfo.platformUserIdentifier,
    };
    fetch('http://192.168.1.102:8080/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)

    })
};

export default UserPost;