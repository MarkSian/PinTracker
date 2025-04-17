// Below are the types used in this project.
// Frame will track the rolls in a frame, whether it is a strike or spare, and the frame number.
// Game will track the date, total score, and the resulting frames from that game.
// Bowler will track the name, average score, and the games played by the bowler.


export type Bowler = {
    id: string; // we did not use a number as a string allows us to be more flexibile in how we generate the id
    name: string;
    averageScore: number;
    games: Game[]; //array of games played by the bowler
};

export type Game = { // a Game is a single game played by a bowler
    id: string;
    date: Date;
    totalScore: number;
    frames: Frame[]; // array of the frames within the game
};

export type Frame = { // a Frame is at most two throws (or three in the 10th frame) in a game
    frameNumber: number; // the number of the frame (1-10)
    rolls: number []; // array of the rolls in the frame
    isStrike: boolean;
    isSpare: boolean;
};