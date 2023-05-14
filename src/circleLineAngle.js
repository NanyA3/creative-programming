const canvasSketch = require("canvas-sketch");
const math = require('canvas-sketch-util/math')

const settings = {
    dimensions: [1080, 1080], // Configuração das dimensões do canvas
};

const sketch = () => {
    let x, y, w, h; // Variáveis para as coordenadas e dimensões
    let circleRadius, angle;

    return ({ context, width, height }) => {
        context.fillStyle = "white"; // Define a cor de preenchimento como branco
        context.fillRect(0, 0, width, height); // Desenha um retângulo branco preenchendo todo o canvas

        x = width * 0.5; // Posição x central do canvas
        y = height * 0.5; // Posição y central do canvas
        w = width * 0.6; // Largura do retângulo
        h = height * 0.1; // Altura do retângulo

        context.save(); // Salva o estado atual do contexto de desenho
        context.translate(x, y); // Translada o sistema de coordenadas para o centro do canvas

        context.strokeStyle = "blue"; // Define a cor da linha como azul

        circleRadius = 200;
        angle = math.degToRad(30); // Converte o ângulo de graus para radianos

        x = Math.cos(angle) * circleRadius; // Calcula a coordenada x do ponto usando o cosseno do ângulo
        y = Math.sin(angle) * circleRadius; // Calcula a coordenada y do ponto usando o seno do ângulo

        context.beginPath(); // Inicia um novo caminho de desenho
        context.moveTo(0, 0); // Move a "caneta" para a posição inicial (canto superior esquerdo do retângulo)
        context.lineTo(x, y); // Desenha uma linha até o ponto calculado
        context.stroke(); // Traça a linha no canvas

        // Desenhar o círculo em volta do segmento de linha
        const radius = Math.sqrt(Math.pow(200, 2)); // Calcula o raio do círculo a partir do comprimento do segmento de linha (200)
        context.beginPath(); // Inicia um novo caminho de desenho
        context.arc(0, 0, radius, 0, 2 * Math.PI); // Desenha um arco completo (círculo) centrado no ponto (0, 0) com o raio calculado
        context.strokeStyle = "black"; // Define a cor da linha como preto
        context.stroke(); // Traça o círculo no canvas

        context.restore(); // Restaura o estado do contexto de desenho para antes das modificações
    };
};

canvasSketch(sketch, settings); // Inicia o sketch no canvas com as configurações fornecidas
