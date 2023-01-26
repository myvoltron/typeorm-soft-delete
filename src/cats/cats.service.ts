import { Injectable } from '@nestjs/common';
import { CatsRepository } from './cats.repository';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  constructor(private catsRepository: CatsRepository) {}

  create(createCatDto: CreateCatDto) {
    return this.catsRepository.save(createCatDto);
  }

  findAll() {
    return this.catsRepository.find();
  }

  findOne(idx: number) {
    return this.catsRepository.findOne({ where: { idx } });
  }

  update(idx: number, updateCatDto: UpdateCatDto) {
    return this.catsRepository.update({ idx }, updateCatDto);
  }

  remove(idx: number) {
    return this.catsRepository.delete(idx);
  }
}
