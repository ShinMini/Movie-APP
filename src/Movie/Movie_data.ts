class Movie_data {
        id: number;
        year: number;
        title: string;
        summary: string;
        poster: string;
    constructor(id : number , year: number, title: string, summary: string, poster: string){
        this.id = id;
        this.year = year;
        this.title = title;
        this.summary = summary;
        this.poster = poster;
    }
}

const Movie_dataes:any[] = [];

Movie_dataes[0] = new Movie_data(0, 2000, "first best", "this movie is awful zero", "https://picsum.photos/id/237/200/300");
Movie_dataes[1] = new Movie_data(1, 2001, "second sad", "second movie is really good", "https://picsum.photos/seed/picsum/200/300");
Movie_dataes[2] = new Movie_data(2, 2002, "third medal", "oh I like it !!", "https://picsum.photos/200/300?grayscale");
Movie_dataes[3] = new Movie_data(3, 2003, "hate four", "I hate four too", "https://picsum.photos/200/300/?blur");
Movie_dataes[4] = new Movie_data(4, 2004, "saw five", "I can't saw saw movie haha", "https://picsum.photos/id/870/200/300?grayscale&blur=2");
Movie_dataes[5] = new Movie_data(5, 2005, "this is seven not six ", "six is six but array index number is five hahahah", "https://picsum.photos/200/300");
Movie_dataes[6] = new Movie_data(6, 2006, "hi six, I'm real six!! ", "seven hate me but IDK the reason why", "https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I");
Movie_dataes[7] = new Movie_data(7, 2007, "five steal my position so I\'m gonnna do the five ", "okay dude I am seven ahhaahha", "https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk");
Movie_dataes[8] = new Movie_data(8, 2008, "okay I\'m eight I love the peacful things ", "seven is six but array index number is five hahahah", "https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g");
Movie_dataes[9] = new Movie_data(9, 2009, "i am nine and you know what? I was born at ninety ninety nine hahahahah... ", "nine is six but array index number is five hahahah", "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ");
export { Movie_dataes };
