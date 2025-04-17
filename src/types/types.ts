// Below are the types used in this project.


export type Team = {
    id: string; // unique id for the team
    name: string; // team name
    bowlerIds: string[]; //array of bowlers on the team
  };
  
  export type Bowler = {
    id: string;
    name: string;
    averageScore: number; // average score of the bowler from all games
    games: Game[]; // array of games played by the bowler
    teamId: string | null; // id of the team the bowler belongs to, null if not in a team
  };
  
  export type Game = {
    id: string;
    date: string;
    totalScore: number;
  };