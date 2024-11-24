import { PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
    transform(gameGenre: string) {
        const popularGameGenres = {
            action: 'Call of Duty',
            adventure: 'Genshin Impact',
            rpg: 'World of Warcraft',
            moba: 'League of Legends',
        };

        if (!Object.prototype.hasOwnProperty.call(popularGameGenres, gameGenre.toLowerCase())) {
            throw new Error('Game genre is not found!');
        }

        return popularGameGenres[gameGenre.toLowerCase()];
    }
}