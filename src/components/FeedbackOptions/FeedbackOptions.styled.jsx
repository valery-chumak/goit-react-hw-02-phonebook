import styled from "@emotion/styled"
export const Container = styled.div`
    padding:20px;
    `
export const Title = styled.h2
    `font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 30px;
    text-align: center;
    color: black;
    margin:10px 0;`
export const Button = styled.button`
    background-color: #4CAF50; 
  border: none;
  box-shadow: 1px 2px #666;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor:pointer;
      &:hover{
        background-color: #2f6b31;; 
        transform: translateY(1px);
    }`
export const List = styled.ul`
    display: flex;
    justify-content:center;
    list-style: none;
    margin:0px;
    padding:0px;
    margin-top:50px;
    `
  export const Item = styled.li`
    &:not(:last-child){
        margin-right: 15px;
    }
  `