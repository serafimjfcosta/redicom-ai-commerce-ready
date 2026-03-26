# Requisitos e Considerações para Vender em Agentic Storefronts

Para utilizar os Agentic Storefronts e permitir que os seus produtos sejam descobertos e comprados diretamente em canais de Inteligência Artificial (como ChatGPT, Google AI Mode, Gemini e Microsoft Copilot), é necessário cumprir determinados requisitos de elegibilidade e compreender considerações técnicas importantes da plataforma Redicom Commerce Cloud.

Quando a sua loja está elegível e configurada, a integração com Agentic Storefronts permite que os agentes de IA leiam o seu catálogo estruturado. Não precisa de ações manuais diárias para que os produtos sejam descobertos, mas deve manter a sincronização ativa para que a compra direta (built-in checkout) ou o redirecionamento otimizado funcionem perfeitamente.

## Requisitos para utilizar Agentic Storefronts

Reveja os seguintes requisitos de elegibilidade para utilizar os Agentic Storefronts na Redicom Commerce Cloud.

| Requisito | ChatGPT | Google AI Mode / Gemini | Microsoft Copilot |
| --- | --- | --- | --- |
| **Mercado de Atuação** | Global | Global | Global |
| **Estrutura de Catálogo** | Obrigatório (Redicom PM Feed) | Obrigatório (Redicom PM Feed) | Obrigatório (Redicom PM Feed) |
| **Sincronização de Stock em Tempo Real** | Obrigatório (Redicom OMS) | Obrigatório (Redicom OMS) | Obrigatório (Redicom OMS) |
| **Políticas Legais** | Obrigatório (Termos, Privacidade, Devoluções) | Obrigatório | Obrigatório |
| **Atributos de Produto Ricos** | Recomendado | Obrigatório | Obrigatório |

*Nota: As políticas legais (Termos e Condições, Política de Privacidade e Política de Devoluções) devem estar devidamente configuradas e publicadas na sua loja online.*

## Considerações sobre a Venda com Agentic Storefronts

Antes de ativar as vendas via Agentic Storefronts, reveja as seguintes considerações técnicas e operacionais:

- **Descoberta vs. Conversão:** O ChatGPT funciona essencialmente como um canal focado na descoberta, onde a conclusão da compra ocorre através de um redirecionamento para o checkout da sua loja online. Outros canais podem permitir uma experiência de compra integrada (built-in checkout) dependendo da região e da evolução da plataforma de IA.
- **Integração de Stock e Preço:** A plataforma Redicom garante que as consultas de agentes de IA acedem a dados em tempo real. O preço e a disponibilidade (stock) refletem exatamente o estado do seu Redicom OMS, evitando ruturas ou discrepâncias.
- **Promoções e Regras de Negócio:** Descontos automáticos e campanhas configuradas no backoffice da Redicom são suportados e calculados corretamente no momento da conversão, assegurando coerência comercial.
- **Descrições de Produto:** Certifique-se de que as descrições dos produtos incluem informações cruciais (como composição, cuidados, avisos legais) nos primeiros caracteres, para facilitar o processamento pelos agentes de IA.
- **Sem Taxas Adicionais:** A Redicom não cobra taxas transacionais adicionais por vendas originadas em Agentic Storefronts. Aplicam-se apenas as taxas normais de processamento de pagamento.

## Funcionalidades Não Suportadas ou Limitadas

De momento, algumas funcionalidades específicas podem apresentar limitações quando a conversão ocorre diretamente num ambiente de Agentic Storefront (built-in checkout), não se aplicando caso o fluxo redirecione para o checkout standard da Redicom:

- **Produtos B2B-only:** Produtos configurados exclusivamente para clientes B2B (com necessidade de login ou aprovação de conta) não estão disponíveis para compra direta por agentes de IA públicos.
- **Personalização Complexa:** Produtos que exigem o upload de ficheiros pelo cliente ou configurações visuais avançadas (customizadores 3D) podem não ser suportados nativamente pelas interfaces de chat da IA.
- **Métodos de Entrega Específicos:** Opções como "Levantamento em Loja" (Click & Collect) ou "Entrega no Próprio Dia" podem não ser apresentadas no fluxo de checkout nativo de certos agentes de IA, dependendo da sua capacidade de recolher a localização precisa do utilizador final.
- **Tracking de Client-Side:** Pixels de tracking customizados (client-side) podem não disparar em checkouts integrados em plataformas de IA. No entanto, a Redicom assegura o tracking server-to-server (S2S) para garantir a atribuição correta da venda ao canal.

## Mapeamento de Dados de Catálogo para IA

Para que os agentes de IA compreendam e recomendem os seus produtos, a informação deve estar perfeitamente estruturada. O **Redicom Product Manager (PM)** e o sistema de **Feed Management** tratam desta estruturação automaticamente.

Os produtos são listados e sincronizados com os canais de IA incluindo:
- Título e Descrição Otimizados (frequentemente gerados ou melhorados via Redicom AI Studio).
- Variantes (Tamanhos, Cores) e Grelhas de Tamanhos.
- Preço e Disponibilidade (Stock em tempo real).
- Imagens de alta qualidade.
- Atributos estruturados (Material, Estilo, Ocasião).

Caso utilize campos customizados (Extra Fields) para dados vitais do produto, o sistema de mapeamento da Redicom permite assegurar que essa informação é corretamente injetada no feed lido pelos agentes de IA, garantindo que detalhes únicos da sua marca são tidos em conta nas recomendações.
