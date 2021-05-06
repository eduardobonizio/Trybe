## Exercícios

Para os exercícios a seguir, utilizaremos um dataset que contém dados de Super-Heróis.
Após fazer o download do arquivo, importe-o para o MongoDB através da ferramenta mongoimport . No seu terminal, utilize o seguinte comando (lembre-se de substituir o caminho do arquivo):
```bash
mongoimport --db=class --collection=superheroes superheroes.json
```
O MongoDb possui diversas ferramentas, como, por exemplo, mongo , mongosh , Compass e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as queries , o importante é realizá-las.

***Exercício 1***: Inspecione um documento para que você se familiarize com eles. Entenda os campos e os níveis existentes no documento escolhido.
```javascript

```
***Exercício 2***: Selecione todos os super-heróis com menos de 1.80m de altura. Lembre-se de que essa informação está gravada em centímetros.
```javascript

```
***Exercício 3***: Retorne o total de super-heróis menores que 1.80m.
```javascript

```
***Exercício 4***: Retorne o total de super-heróis com até 1.80m.
```javascript

```
***Exercício 5***: Selecione um super-herói com 2.00m ou mais de altura.
```javascript

```
***Exercício 6***: Retorne o total de super-heróis com 2.00m ou mais.
```javascript

```
***Exercício 7***: Selecione todos os super-heróis que têm olhos verdes.
```javascript

```
***Exercício 8***: Retorne o total de super-heróis com olhos azuis.
```javascript

```
***Exercício 9***: Utilizando o operador $in , selecione todos os super-heróis com cabelos pretos ou carecas ( "No Hair" ).
```javascript

```
***Exercício 10***: Retorne o total de super-heróis com cabelos pretos ou carecas ( "No Hair" ).
```javascript

```
***Exercício 11***: Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.
```javascript

```
***Exercício 12***: Utilizando o operador $not , retorne o total de super-heróis que não tenham mais de 1.80m de altura.
```javascript

```
***Exercício 13***: Selecione todos os super-heróis que não sejam humanos ou que não sejam maiores do que 1.80m .
```javascript

```
***Exercício 14***: Selecione todos os super-heróis com 1.80m ou 2.00m de altura e que sejam publicados pela Marvel Comics .
```javascript

```
***Exercício 15***: Selecione todos os super-heróis que pesem entre 80kg e 100kg , sejam Humanos ou Mutantes e não sejam publicados pela DC Comics .
```javascript

```
***Exercício 16***: Retorne o total de documentos que não contêm o campo race .
```javascript

```
***Exercício 17***: Retorne o total de documentos que contêm o campo hairColor .
```javascript

```
***Exercício 18***: Remova apenas um documento publicado pela Sony Pictures .
```javascript

```
***Exercício 19***: Remova todos os documentos publicados pelo George Lucas .
```javascript

```
