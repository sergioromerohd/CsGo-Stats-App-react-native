//clase dto para la tabla de estadisticas principales
package com.CsStats.CsStats.DTO;

public class StatsMapDTO {

        protected String id_usuario;
        protected String mapa;
        protected String img;
        protected String rounds;
        protected String wins;

        public StatsMapDTO() {
        }

        public StatsMapDTO(String id_usuario, String mapa, String img, String rounds, String wins) {
                this.id_usuario = id_usuario;
                this.mapa = mapa;
                this.img = img;
                this.rounds = rounds;
                this.wins = wins;

        }


        public String getId_usuario() {
                return id_usuario;
        }

        public void setId_usuario(String id_usuario) {
                this.id_usuario = id_usuario;
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

       
        @Override
        public String toString() {
                return "StatsMapDTO [id_usuario=" + id_usuario + ", mapa=" + mapa + ", img=" + img + ", rounds=" + rounds
                                + ", wins=" + wins + "]";
        }

}

