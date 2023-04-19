//clase dto para la tabla de estadisticas principales
package com.CsStats.CsStats.DTO;

public class MainStatsDto {
        public String id_usuario;
        public String timePlayedValue;
        public String scoreValue;
        public String kills;
        public String deaths;
        public String kd;
        public String damage;
        public String headshosts;
        public String dominations;
        public String shotsFired;
        public String shotsHit;
        public String shotsAccuracy;
        public String snipersKilled;
        public String dominationOverkills;
        public String dominationRevenges;
        public String bombsPlanted;
        public String bombsDefused;
        public String moneyEarned;
        public String hostagesRescued;
        public String mvp;
        public String wins;
        public String ties;
        public String matchesPlayed;
        public String losses;
        public String roundsPlayed;
        public String roundsWon;
        public String wlPercentage;
        public String headshotPct;

        public MainStatsDto() {
        }

        public MainStatsDto(String  id_usuario,String timePlayedValue, String scoreValue, String kills, String deaths, String kd,
                        String damage, String headshosts, String dominations, String shotsFired, String shotsHit,
                        String shotsAccuracy, String snipersKilled, String dominationOverkills, String dominationRevenges,
                        String bombsPlanted, String bombsDefused, String moneyEarned, String hostagesRescued, String mvp,
                        String wins, String ties, String matchesPlayed, String losses, String roundsPlayed,
                        String roundsWon, String wlPercentage, String headshotPct) {
                this.id_usuario = id_usuario;
                this.timePlayedValue = timePlayedValue;
                this.scoreValue = scoreValue;
                this.kills = kills;
                this.deaths = deaths;
                this.kd = kd;
                this.damage = damage;
                this.headshosts = headshosts;
                this.dominations = dominations;
                this.shotsFired = shotsFired;
                this.shotsHit = shotsHit;
                this.shotsAccuracy = shotsAccuracy;
                this.snipersKilled = snipersKilled;
                this.dominationOverkills = dominationOverkills;
                this.dominationRevenges = dominationRevenges;
                this.bombsPlanted = bombsPlanted;
                this.bombsDefused = bombsDefused;
                this.moneyEarned = moneyEarned;
                this.hostagesRescued = hostagesRescued;
                this.mvp = mvp;
                this.wins = wins;
                this.ties = ties;
                this.matchesPlayed = matchesPlayed;
                this.losses = losses;
                this.roundsPlayed = roundsPlayed;
                this.roundsWon = roundsWon;
                this.wlPercentage = wlPercentage;
                this.headshotPct = headshotPct;
        }

        public String getId_usuario() {
                return id_usuario;
        }

        public void setId_usuario(String id_usuario) {
                this.id_usuario = id_usuario;
        }

        public String getTimePlayedValue() {
                return timePlayedValue;
        }

        public void setTimePlayedValue(String timePlayedValue) {
                this.timePlayedValue = timePlayedValue;
        }

        public String getScoreValue() {
                return scoreValue;
        }

        public void setScoreValue(String scoreValue) {
                this.scoreValue = scoreValue;
        }

        public String getKills() {
                return kills;
        }

        public void setKills(String kills) {
                this.kills = kills;
        }

        public String getDeaths() {
                return deaths;
        }

        public void setDeaths(String deaths) {
                this.deaths = deaths;
        }

        public String getKd() {
                return kd;
        }

        public void setKd(String kd) {
                this.kd = kd;
        }

        public String getDamage() {
                return damage;
        }

        public void setDamage(String damage) {
                this.damage = damage;
        }

        public String getHeadshosts() {
                return headshosts;
        }

        public void setHeadshosts(String headshosts) {
                this.headshosts = headshosts;
        }

        public String getDominations() {
                return dominations;
        }

        public void setDominations(String dominations) {
                this.dominations = dominations;
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

        public String getSnipersKilled() {
                return snipersKilled;
        }

        public void setSnipersKilled(String snipersKilled) {
                this.snipersKilled = snipersKilled;
        }

        public String getDominationOverkills() {
                return dominationOverkills;
        }

        public void setDominationOverkills(String dominationOverkills) {
                this.dominationOverkills = dominationOverkills;
        }

        public String getDominationRevenges() {
                return dominationRevenges;
        }

        public void setDominationRevenges(String dominationRevenges) {
                this.dominationRevenges = dominationRevenges;
        }

        public String getBombsPlanted() {
                return bombsPlanted;
        }

        public void setBombsPlanted(String bombsPlanted) {
                this.bombsPlanted = bombsPlanted;
        }

        public String getBombsDefused() {
                return bombsDefused;
        }

        public void setBombsDefused(String bombsDefused) {
                this.bombsDefused = bombsDefused;
        }

        public String getMoneyEarned() {
                return moneyEarned;
        }

        public void setMoneyEarned(String moneyEarned) {
                this.moneyEarned = moneyEarned;
        }

        public String getHostagesRescued() {
                return hostagesRescued;
        }

        public void setHostagesRescued(String hostagesRescued) {
                this.hostagesRescued = hostagesRescued;
        }

        public String getMvp() {
                return mvp;
        }

        public void setMvp(String mvp) {
                this.mvp = mvp;
        }

        public String getWins() {
                return wins;
        }

        public void setWins(String wins) {
                this.wins = wins;
        }

        public String getTies() {
                return ties;
        }

        public void setTies(String ties) {
                this.ties = ties;
        }

        public String getMatchesPlayed() {
                return matchesPlayed;
        }

        public void setMatchesPlayed(String matchesPlayed) {
                this.matchesPlayed = matchesPlayed;
        }

        public String getLosses() {
                return losses;
        }

        public void setLosses(String losses) {
                this.losses = losses;
        }

        public String getRoundsPlayed() {
                return roundsPlayed;
        }

        public void setRoundsPlayed(String roundsPlayed) {
                this.roundsPlayed = roundsPlayed;
        }

        public String getRoundsWon() {
                return roundsWon;
        }

        public void setRoundsWon(String roundsWon) {
                this.roundsWon = roundsWon;
        }

        public String getWlPercentage() {
                return wlPercentage;
        }

        public void setWlPercentage(String wlPercentage) {
                this.wlPercentage = wlPercentage;
        }

        public String getHeadshotPct() {
                return headshotPct;
        }

        public void setHeadshotPct(String headshotPct) {
                this.headshotPct = headshotPct;
        }

        @Override
        public String toString() {
                return "Stats [id_usuario="+id_usuario+" timePlayedValue=" + timePlayedValue + ", scoreValue=" + scoreValue + ", kills=" + kills
                                + ", deaths=" + deaths + ", kd=" + kd + ", damage=" + damage + ", headshosts=" + headshosts
                                + ", dominations=" + dominations + ", shotsFired=" + shotsFired + ", shotsHit=" + shotsHit
                                + ", shotsAccuracy=" + shotsAccuracy + ", snipersKilled=" + snipersKilled
                                + ", dominationOverkills=" + dominationOverkills + ", dominationRevenges="
                                + dominationRevenges + ", bombsPlanted=" + bombsPlanted + ", bombsDefused=" + bombsDefused
                                + ", moneyEarned=" + moneyEarned + ", hostagesRescued=" + hostagesRescued + ", mvp=" + mvp
                                + ", wins=" + wins + ", ties=" + ties + ", matchesPlayed=" + matchesPlayed + ", losses="
                                + losses + ", roundsPlayed=" + roundsPlayed + ", roundsWon=" + roundsWon
                                + ", wlPercentage=" + wlPercentage + ", headshotPct=" + headshotPct + "]";
        }

}

