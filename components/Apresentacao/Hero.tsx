import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="max-w-4xl mx-auto pt-14 md:pt-0 sm:p-6 md:p-8 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Left Column - Texto Principal */}
        <div className="lg:col-span-2 flex flex-col space-y-4 text-gray-800 leading-relaxed">
          <div className="mb-6 sm:mb-8 mt-8 sm:mt-12 md:mt-16">
            <h1 className="text-lg sm:text-xl md:text-2xl tracking-wider font-lyon-semibold">Comunicado Importante</h1>
            <h1 className="text-xl sm:text-xl md:text-xl tracking-wider font-akkurat-regular">Manual Pfister</h1>
          </div>
          <div className="space-y-4">
            <p className="font-akkurat-regular">Prezados clientes,</p>
            <p className="font-akkurat-regular text-base sm:text-lg">
              Informamos que o manual As Pirâmides Coloridas de Pfister (ISBN 978-65-50721-86-2) 
apresenta um erro em três tabelas do Capítulo 14 – Estudo normativo com <strong className="font-akkurat-bold">crianças e 
adolescentes</strong>-, decorrente de uma falha no cálculo de seus componentes. 

              
            </p>
          </div>
        </div>
        {/* Right Column - PFISTER Branding */}
        <div className="lg:col-span-1 flex items-end justify-center lg:justify-start">
          <div className="w-full max-w-xs sm:max-w-sm lg:max-w-full flex flex-col items-center pl-0 p-4 rounded-lg">
            <img src="/capa.png" alt="Capa do manual" className="w-full h-72 sm:h-80 lg:h-92 object-contain" />
          </div>
        </div>
      </div>
      {/* Conteúdo adicional */}
      <div className="space-y-4 text-gray-800 leading-relaxed mb-8 sm:mb-10">
        <p className="font-akkurat-regular">As tabelas afetadas são:</p>
        <ul className="list-disc ml-4 sm:ml-6 space-y-2">
          <li className="font-akkurat-regular">
            Tabela 14.3 – Comparação das síndromes cromáticas (páginas
            166 e 167);
          </li>
          <li className="font-akkurat-regular">
            Tabela 14.9 – Análise descritiva das síndromes cromáticas por
            idade – administração tradicional (páginas 174 e 175);
          </li>
          <li className="font-akkurat-regular">
            Tabela 14.24 – Análise descritiva das síndromes cromáticas
            por idade – administração tradicional (página 198).
          </li>
        </ul>
        <p className="font-akkurat-regular">
          Os manuais atualmente em circulação continuam válidos e podem ser utilizados desde que as tabelas corrigidas sejam utilizadas em substituição às originais. As tabelas corrigidas estão disponíveis para download no botão abaixo.

        </p>
        <a href="/tabelas.pdf" download>
          <Button
            variant="outline"
            className="0 mt-4 bg-transparent font-akkurat-regular w-full sm:w-auto"
          >
            Acesse aqui
          </Button>
        </a>
         <div className="w-full">
          <p className="font-akkurat-regular mb-16">
            Ressaltamos que o <strong className="font-akkurat-bold">Capítulo 13</strong>, voltado aos estudos normativos com <strong className="font-akkurat-bold">adultos, não foi afetado,</strong> e que os sistemas de correção informatizada já estão com os valores corrigidos.

          </p>
        </div>
        {/* Texto com largura 90% ocupando toda a tela */}
       
        {/* Grid 2/3 para texto e 1/3 para imagem */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-6 items-start mt-16 sm:mt-8">
          <div className="md:col-span-2">
            <p className="font-akkurat-regular">
              A editora, em conjunto com os autores, está trabalhando em uma <strong className="font-akkurat-bold">edição revisada</strong> do manual, que será lançada ainda no segundo semestre de 2025 e  <strong className="font-akkurat-bold">substituirá os manuais atuais.</strong> Essa substituição será feita ao longo deste semestre, sem custos ou prejuízos para o cliente.
              <br/><br/>
              Pedimos que preencham o seguinte formulário para agendar a troca. Entraremos em contato em breve com novas informações.

            </p>
            <a href="https://form.respondi.app/FGlGgVmH" target="_blank"
  rel="noopener noreferrer">
            <Button variant="outline" className="mt-4 bg-transparent font-akkurat-regular w-full sm:w-auto">
              Preencha aqui
            </Button>
            </a>
          </div>

          <div className="lg:col-span-1 flex justify-center md:justify-start mt-4 md:mt-0">
            <div className="max-w-xs sm:max-w-sm md:max-w-full flex flex-col p-4  pt-0 pl-0 rounded-lg">
              <img src="/capa2.png" alt="Capa do manual" className="w-full h-56 sm:h-64 md:h-62 object-contain" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-20 text-center text-sm font-akkurat-regular">
        <p className="font-akkurat-bold">Editora Hogrefe CETEPP</p>
        <p>R. Barão do Triunfo, 73 – 9º andar – Brooklin</p>
        <p>São Paulo, SP – 04602-000</p>
        <p>Fone: 11 3900-1670</p>
        <p>E-mail: <a href="mailto:contato@hogrefe.com.br" className="underline">contato@hogrefe.com.br</a></p>
        <a href="https://hogrefe.com.br/" className="underline">www.hogrefe.com.br</a>
      </div>
    </div>
  )
}
