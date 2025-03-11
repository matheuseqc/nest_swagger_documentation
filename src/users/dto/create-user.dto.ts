import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        description: 'Nome do usuário',
        example: 'João da Silva'
    })
    name: string;

    
    @ApiProperty({
        description: 'Email do usuário',
        example: 'Matheus'
    })
    email: string;

    @ApiProperty({
        description: 'Senha do usuário',
        example: 'Matheus'
    })
    password: string;
    

}
