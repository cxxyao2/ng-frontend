import { Component, OnInit } from '@angular/core';

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss'],
})
export class ChannelComponent implements OnInit {
  /* channel CRUD */
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
