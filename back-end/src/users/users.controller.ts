import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {Request} from "express";
import { SortOrder } from 'mongoose';

export interface opt {
  $text?: any;
  $and?: any;
  $or?: any;
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @Get()
  async findAll(@Req() req: Request) {

      let options: opt = {};
      //search by name
      if (req.query.s) {
          options.$or = [{ 'name.first': new RegExp(req.query.s.toString(), 'i') }]
          options.$or.push({ 'name.last': new RegExp(req.query.s.toString(), 'i') })
      }  
      //filter by gender
      if (req.query.gender && req.query.gender !== 'all') {
        if(options.$and === undefined){
          options.$and = [{'gender': req.query.gender}]
        } else {
          options.$and.push(
            {'gender': req.query.gender}
          )
        }
      }
      //filter by state
      if (req.query.state && req.query.state !== 'all') {
        if(options.$and === undefined){
          options.$and = [{'location.state': new RegExp(req.query.state.toString(), 'i')}]
        } else {
          options.$and.push(
            {'location.state': new RegExp(req.query.state.toString(), 'i')}
          )
        }
      }

      const query = this.usersService.find(options);
      //sort result
      if (req.query.sort) {
          query.sort({
              'name.first': req.query.sort as SortOrder
          })
      }

      const page: number = parseInt(req.query.page as any) || 1;
      const limit = 50;
      const total = await this.usersService.count(options);

      const data = await query.limit(limit * page).exec();

      return {
          data,
          total,
          page,
          last_page: Math.ceil(total / limit)
      };
  }











}
