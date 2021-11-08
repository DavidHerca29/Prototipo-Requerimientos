import { WWCrepository } from '../repositories/wwcrepository'
import { Logger, User } from '../common'

export class UserController {
    private static instance: UserController;
    private log: Logger;

    private constructor()
    {
        this.log = new Logger();
        try
        {
        } catch (e)
        {
            this.log.error(e);
        }
    }

    public static getInstance() : UserController
    {
        if (!this.instance)
        {
            this.instance = new UserController();
        }
        return this.instance;
    }
    public signin(email: string, pass: string) : Promise<any>
    {
        return WWCrepository.getInstance().signin(email, pass);
    }
    public login(email: string, pass: string) : Promise<any>
    {
        return WWCrepository.getInstance().login(email, pass);
    }
    public registerAutobusera(owner: string, company: string) : Promise<any>
    {
        return WWCrepository.getInstance().registerAutobusera(owner, company);
    }
    public newPost(time : string, email : string ) : Promise<any>
    {
        return WWCrepository.getInstance().newPost(time, email);
    }
    public newhabit(longitude : number, latitude : number, email : string, title: string, fecha: string ) : Promise<any>
    {
        return WWCrepository.getInstance().newhabit(longitude, latitude, email, title, fecha );
    }
/*
    public FriendList(user: string) : Promise<any>
    {
        return WWCrepository.getInstance().FriendList(user);
    }
    public PlansPerUser(user: string) : Promise<any>
    {
        return WWCrepository.getInstance().PlansPerUser(user);
    }
    public RatingPerMonth(gameMode : string, month:number, player : string, ano : string) : Promise<any>
    {
        return WWCrepository.getInstance().RatingPerMonth(gameMode, month, player, ano);
    }
    public MatchesPerMonth(gameMode : string, month:number, player : string, ano : string) : Promise<any>
    {
        return WWCrepository.getInstance().MatchesPerMonth(gameMode, month, player, ano);
    }
    public MatchTracing(nickBlack : string, nickWhite:string, time : string) : Promise<any>
    {
        return WWCrepository.getInstance().MatchTracing(nickBlack, nickWhite, time);
    }
    */
}