package com.CsStats.CsStats.DTO;

public class UsuariosDto {

    public String platformSlug;
    public String platformUserId;
    public String platformUserHandle;
    public String platformUserIdentifier;
    public String avatarUrl;
    public Object additionalParameters;

    public UsuariosDto() {
    }

    public UsuariosDto(String platformSlug, String platformUserId, String platformUserHandle,
            String platformUserIdentifier, String avatarUrl, Object additionalParameters) {
        this.platformSlug = platformSlug;
        this.platformUserId = platformUserId;
        this.platformUserHandle = platformUserHandle;
        this.platformUserIdentifier = platformUserIdentifier;
        this.avatarUrl = avatarUrl;
        this.additionalParameters = additionalParameters;
    }

    public String getPlatformSlug() {
        return platformSlug;
    }

    public void setPlatformSlug(String platformSlug) {
        this.platformSlug = platformSlug;
    }

    public String getPlatformUserId() {
        return platformUserId;
    }

    public void setPlatformUserId(String platformUserId) {
        this.platformUserId = platformUserId;
    }

    public String getPlatformUserHandle() {
        return platformUserHandle;
    }

    public void setPlatformUserHandle(String platformUserHandle) {
        this.platformUserHandle = platformUserHandle;
    }

    public String getPlatformUserIdentifier() {
        return platformUserIdentifier;
    }

    public void setPlatformUserIdentifier(String platformUserIdentifier) {
        this.platformUserIdentifier = platformUserIdentifier;
    }

    public String getAvatarUrl() {
        return avatarUrl;
    }

    public void setAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
    }

    public Object getAdditionalParameters() {
        return additionalParameters;
    }

    public void setAdditionalParameters(Object additionalParameters) {
        this.additionalParameters = additionalParameters;
    }

    @Override
    public String toString() {
        return "UsuariosDto [additionalParameters=" + additionalParameters + ", avatarUrl=" + avatarUrl
                + ", platformSlug=" + platformSlug + ", platformUserId=" + platformUserId + ", platformUserHandle="
                + platformUserHandle + ", platformUserIdentifier=" + platformUserIdentifier + "]";
    }
    
}
