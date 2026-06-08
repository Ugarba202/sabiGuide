import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { GatesService } from './gates.service';
import { UpdateGateDto } from './dto/update-gate.dto';

@Controller('gates')
export class GatesController {
  constructor(private readonly gatesService: GatesService) {}

  @Get(':userId')
  getGateState(@Param('userId') userId: string) {
    return this.gatesService.getGateState(userId);
  }

  @Patch(':userId')
  updateGateState(@Param('userId') userId: string, @Body() updateGateDto: UpdateGateDto) {
    return this.gatesService.updateGateState(userId, updateGateDto);
  }
}
