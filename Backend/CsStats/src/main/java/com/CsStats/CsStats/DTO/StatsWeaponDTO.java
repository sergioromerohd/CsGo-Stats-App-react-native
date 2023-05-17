//clase dto para la tabla de estadisticas principales
package com.CsStats.CsStats.DTO;

public class StatsWeaponDTO {

        public String id_usuario;
        public String weapon;
        public String img;
        public String kills;
        public String shotsFired;
        public String shotsHit;
        public String shotsAccuracy;


        public StatsWeaponDTO() {
        }

        public StatsWeaponDTO(String id_usuario, String weapon, String img, String kills, String shotsFired, String shotsHit, String shotsAccuracy) {
                this.id_usuario = id_usuario;
                this.weapon = weapon;
                this.img = img;
                this.kills = kills;
                this.shotsFired = shotsFired;
                this.shotsHit = shotsHit;
                this.shotsAccuracy = shotsAccuracy;

        }


        public String getId_usuario() {
                return id_usuario;
        }

        public void setId_usuario(String id_usuario) {
                this.id_usuario = id_usuario;
        }

        public String getWeapon() {
                return weapon;
        }

        public void setWeapon(String weapon) {
                this.weapon = weapon;
        }

        public String getImg() {
                return img;
        }

        public void setImg(String img) {
                this.img = img;
        }

        public String getKills() {
                return kills;
        }       

        public void setKills(String kills) {
                this.kills = kills;
        }

        public String getShotsFired() {
                return shotsFired;
        }

        public void setShotsFired(String shotsFired) {
                this.shotsFired = shotsFired;
        }

        public String getShotsHit() {
                return shotsHit;
        }

        public void setShotsHit(String shotsHit) {
                this.shotsHit = shotsHit;
        }

        public String getShotsAccuracy() {
                return shotsAccuracy;
        }

        public void setShotsAccuracy(String shotsAccuracy) {
                this.shotsAccuracy = shotsAccuracy;
        }

        @Override
        public String toString() {
                
                return "StatsWeaponDTO [id_usuario=" + id_usuario + ", weapon=" + weapon + ", img=" + img + ", kills=" + kills + ", shotsFired=" + shotsFired + ", shotsHit=" + shotsHit + ", shotsAccuracy=" + shotsAccuracy + "]";
        }


       

}

