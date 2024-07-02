import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
     
import {  Observable, throwError,BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiURL = "http://localhost:12285/api";
  public search = new BehaviorSubject<string>("");
    
/*------------------------------------------
--------------------------------------------
Http Header Options
--------------------------------------------
--------------------------------------------*/
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
  getItemById: any;
 
/*------------------------------------------
--------------------------------------------
Created constructor
--------------------------------------------
--------------------------------------------*/
constructor(private httpClient: HttpClient) { }
  
/**
 * Write code on Method
 *
 * @return response()
 */
getAll(): Observable<any> {

  return this.httpClient.get(this.apiURL + '/Items')

  .pipe(
    catchError(this.errorHandler)
  )
}
  
/**
 * Write code on Method
 *
 * @return response()
 */
create(post:Post): Observable<any> {

  return this.httpClient.post(this.apiURL + '/Items/', JSON.stringify(post), this.httpOptions)

  .pipe(
    catchError(this.errorHandler)
  )
}  
  
/**
 * Write code on Method
 *
 * @return response()
 */
find(id:number): Observable<any> {

  return this.httpClient.get(this.apiURL + '/Items/' + id)

  .pipe(
    catchError(this.errorHandler)
  )
}
  
/**
 * Write code on Method
 *
 * @return response()
 */
update(id:number, post:Post): Observable<any> {

  return this.httpClient.put(this.apiURL + '/Items/' + id, JSON.stringify(post), this.httpOptions)

  .pipe( 
    catchError(this.errorHandler)
  )
}
     
/**
 * Write code on Method
 *
 * @return response()
 */
delete(id:number){
  return this.httpClient.delete(this.apiURL + '/Items/' + id, this.httpOptions)

  .pipe(
    catchError(this.errorHandler)
  )
}
    
/** 
 * Write code on Method
 *
 * @return response()
 */
errorHandler(error:any) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(errorMessage);
}
}
