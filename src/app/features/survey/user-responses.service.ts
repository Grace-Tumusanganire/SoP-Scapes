import {Injectable} from '@angular/core'

@Injectable()

export class UserResponsesService {
    private userResponses: {questionId: number; emojiValue:number}[] = [];

    setUserResponses(responses: {questionId: number; emojiValue: number}[]){
        this.userResponses = responses;
    }

    getUserResponses(){
        return this.userResponses;
    }
}