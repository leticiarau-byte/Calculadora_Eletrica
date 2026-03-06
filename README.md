# Calculadora_Eletrica
Calculadora_Elétrica

⚡ Calculadora de Consumo Elétrico (JS)
Uma ferramenta simples e eficiente desenvolvida em JavaScript para calcular o consumo mensal de energia de eletrodomésticos e o custo estimado na conta de luz.

🚀 Como Funciona?
O script solicita ao usuário os dados básicos do aparelho e realiza o cálculo baseado na fórmula de consumo de energia elétrica: $$E_{(kWh)} = \frac{P_{(W)} \times t_{(h)} \times d}{1000}$$

Onde:
P: Potência do objeto (em Watts ou kW).
t:Tempo de uso diário (em horas).
d:Dias de uso no mês (padrão: 30 dias).

🛠️ Funcionalidades:
Conversão Automática:
Aceita entrada tanto em Watts (W) quanto em Quilowatts (kW).
Cálculo de Custo:
Estima o valor em Reais baseando-se em uma tarifa média de R$ 0,90 por kWh.
Saída Formatada: 
Exibe o nome do objeto, o consumo total em kWh e o valor financeiro com duas casas decimais.

📖 Como Executar:
Abra o console do seu navegador (F12 ou Ctrl+Shift+I).
Copie e cole o código do arquivo calculadora.js.Siga as instruções nos prompts que aparecerão na tela.

💻 Exemplo de UsoPlaintextEntrada: 
- Objeto: Ar Condicionado
- Potência: 1200 (Watts)
- Uso diário: 8 horas

Saída:
- Nome do objeto: Ar Condicionado
- O valor pro mês: R$ 259.20
- O valor em KWH: 288
📝 Próximos Passos (Roadmap)[ ] Criar uma interface HTML/CSS para evitar o uso de prompt.[ ] Permitir que o usuário configure o valor da tarifa (kWh) da sua região.[ ] Adicionar suporte para cálculo de múltiplos aparelhos simultaneamente.⭐ Se este projeto te ajudou a entender melhor lógica de programação, sinta-se à vontade para dar uma estrela no repositório!
