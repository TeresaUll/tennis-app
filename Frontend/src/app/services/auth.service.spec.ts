import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AuthService);
    localStorage.setItem('token', "test");
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Comprobación función signUp', () => {
    let signUpF = spyOn(service, 'signUpUser')
    service.signUpUser({email: "test@gmail.com", password: "test"});
    expect(signUpF).toHaveBeenCalled();
  });
});
