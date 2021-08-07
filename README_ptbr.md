# Álgebra e Geometria

O sistema visa resolver problemas de álgebra linear e também, através da biblioteca [P5JS](https://p5js.org/), criar diferentes formas geométricas.

>Nota: O sistema ainda está em desenvolvimento pois voltei a mexer nele recentemente. Tenho algumas ideias para colocar nas duas páginas mas por enquanto estou focando em organizar o código e algumas outras coisas.

## Sobre problemas de álgebra linear

>Nota: Por enquanto, o único cálculo que está sendo feito é a eliminação por Gauss-Jordan. No futuro, os outros métodos serão adicionados.

### Como usar o sistema de cálculo de álgebra linear?

Antes de fazer os cálculos, você terá de criar um arquivo com os dados necessários. Siga o passo a passo abaixo para criar o arquivo:

1. Em uma pasta de sua preferência, crie um arquivo do tipo `.m` (Ex.: `my-matrix.m`).
2. Abra o arquivo em um editor de texto de sua prefência (recomendo o VS Code, Sublime Text ou Atom).
3. Com o arquivo aberto, escreva na primeira linha, respectivamente, a quantidade de linhas da matriz, a quantidade de colunas da matriz e a quantidade de valores (linhas x colunas)
4. Após feito essa primeira linha, você deve colocar, respectivamente, a posição referênte a linha, depois a coluna, depois o valor que você quer que fique na posição que você definiu.
5. Repita o passo acima até que todas as linhas e colunas estejam preenchidas.

Segue abaixo um exemplo de como os dados devem ficar no arquivo:

```
3 4 12 
1 1 -65
1 2 8
1 3 -7
1 4 86
2 1 22
2 2 60
2 3 2
2 4 52
3 1 10
3 2 -29
3 3 41
3 4 1
```

Agora, para fazer o cálculo da matríz que você criou no arquivo, siga os passos abaixo:

1. Na página ***Linear Algebra***, clique no botão ***Open File***.
2. Escolha o arquivo que contém os valores da matriz que deseja calcular, conforme mostrado no passo a passo anterior.
3. Os valores do arquivo carregado aparecerão na área de texto superior e o resultado aparecerá na parte inferior.

## Sobre formas geométricas

Primeiramente, esta parte do sistema só foi possível ser feita graças a biblioteca [P5JS](https://p5js.org/), pois tem uma gama de possibilidades de objetos que podem ser criados com diferentes atributos.
Outra biblioteca utilizada é a [p5.EasyCam](https://github.com/freshfork/p5.EasyCam), para poder dar zoom nas figuras e poder ver em outras perspectivas.

Para criar objetos no canvas você terá que fazer o seguinte:

1. Vá no arquivo main.js e crie a função setup e draw (sim, bem parecido com as funções da IDE do Arduino).
2. Depois, na função setup, utilize a função `createCanvas()` para criar um canvas na página passando como parâmetros a largura e a altura, respectivamente. Também pode ser colocado um terceiro parâmetro, que é o WEBGL para figuras 3D.
3. Ainda na função setup, caso deseje modificar o frame rate, utilize a função `frameRate()` passando como parâmetro a quantidade de quadros que desejar.
4. Agora na função draw, modifique a cor de fundo utilizando a função `backgroud()` passando como parâmetro a cor que desejar.
5. Agora que tem toda a estrutura pronta, você pode criar as formas geométricas da forma que quiser.

O arquivo main.js também aceita criação de objetos da biblioteca P5JS.

>Nota: Por padrão, o código vem com um canvas e o frame rate definidos e também com o p5.EasyCam inicializado.