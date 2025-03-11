import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({
        description: 'Atualização do Nome do usuário',
        example: 'João da Silva'
    })
    name: string;

    @ApiProperty({
        description: 'Atualização do Email do usuário',
        example: 'Matheus'
    })
    email: string;

    @ApiProperty({
        description: 'Atualização da Senha do usuário',
        example: 'Matheus', 
    })
    password: string; 
}
