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
export const List = styled.ul`
    display: flex;
    flex-direction:column;
    align-items:center;
    list-style: none;
    margin:0px;
    padding:0px;
    margin-top:50px;
    `
export const Item = styled.li`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: black;
    &:not(:last-child){
        margin-bottom: 15px;
    }
  `