//clase dto para la tabla de estadisticas principales
package com.CsStats.CsStats.DTO;

public class StatsMapUsuarioDTO {

        protected String numFila;
        protected String id_usuario;
        protected String user;
        protected String avatar;
        protected long statsID;
        protected String mapa;
        protected String img;
        protected String rounds;
        protected String wins;
        protected String fecha;

        public StatsMapUsuarioDTO() {
        }

        public StatsMapUsuarioDTO(String numFila, String id_usuario, String user, String avatar, long statsID, String mapa, String img, String rounds, String wins, String fecha) {
                this.numFila = numFila;
                this.id_usuario = id_usuario;
                this.user = user;
                this.avatar = avatar;
                this.statsID = statsID;
                this.mapa = mapa;
                this.img = img;
                this.rounds = rounds;
                this.wins = wins;
                this.fecha = fecha;
        }

        public String getNumFila() {
                return numFila;
        }

        public void setNumFila(String numFila) {
                this.numFila = numFila;
        }


        public String getUser() {
                return user;
        }

        public void setUser(String user) {
                this.user = user;
        }


        public long getStatsID() {
                return statsID;
        }

        public void setStatsID(long statsID) {
                this.statsID = statsID;
        }

        public String getId_usuario() {
                return id_usuario;
        }

        public void setId_usuario(String id_usuario) {
                this.id_usuario = id_usuario;
        }

        public String getAvatar() {
                return avatar;
        }

        public void setAvatar(String avatar) {
                this.avatar = avatar;
        }

        public String getMapa() {
                return mapa;
        }

        public void setMapa(String mapa) {
                this.mapa = mapa;
        }

        public String getImg() {
                return img;
        }

        public void setImg(String img) {
                this.img = img;
        }

        public String getRounds() {
                return rounds;
        }

        public void setRounds(String rounds) {
                this.rounds = rounds;
        }

        public String getWins() {
                return wins;
        }

        public void setWins(String wins) {
                this.wins = wins;
        }

        public String getFecha(){
                return fecha;
        }

        public void setFecha(String fecha){
                this.fecha = fecha;
        }

        @Override
        public String toString() {
                return "Stats [user=" + user + ", statsID=" + statsID + ", id_usuario="
                                + id_usuario + ", timePlayedValue=" + mapa + ", img=" + img + ", rounds=" + rounds + ", wins=" + wins + ", fecha=" + fecha + "]";

        }

}

