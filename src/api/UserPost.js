import './../vars/ServerBars.js'
const UserPost = async (userinfo) => {

    const requestBody = {
        additionalParameters: userinfo.additionalParameters,
        avatarUrl: userinfo.avatarUrl,
        platformSlug: userinfo.platformSlug,
        platformUserHandle: userinfo.platformUserHandle,
        platformUserId: userinfo.platformUserId,
        platformUserIdentifier: userinfo.platformUserIdentifier,
    };
    fetch(serverurl+serverport+'/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'password': cs2statsPasword
        },
        body: JSON.stringify(requestBody)

    })
};

export default UserPost;