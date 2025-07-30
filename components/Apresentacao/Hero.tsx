import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Left Column - Texto Principal */}
        <div className="lg:col-span-2 flex flex-col space-y-4 text-gray-800 leading-relaxed">
          <div className="mb-6 sm:mb-8 mt-8 sm:mt-12 md:mt-16">
            <h1 className="text-lg sm:text-xl md:text-2xl tracking-wider font-lyon-semibold">Comunicado Importante</h1>
          </div>
          <div className="space-y-4">
            <p className="font-akkurat-regular">Prezados clientes,</p>
            <p className="font-akkurat-regular text-base sm:text-lg">
              Informamos que o manual As Pirâmides Coloridas de Pfister (ISBN 978-65-50721-86-2) apresenta um erro de
              cálculo na construção das síndromes cromáticas nas tabelas do{" "}
              <strong className="font-akkurat-bold">Capítulo 14</strong>, voltadas às normas para crianças e
              adolescentes. O Capítulo 13, voltado aos estudos com adultos,{" "}
              <strong className="font-akkurat-bold">não foi afetado</strong>.
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
            <strong className="font-akkurat-bold">Tabela 14.3</strong> – Comparação das síndromes cromáticas (páginas
            166 e 167);
          </li>
          <li className="font-akkurat-regular">
            <strong className="font-akkurat-bold">Tabela 14.9</strong> – Análise descritiva das síndromes cromáticas por
            idade – administração tradicional (páginas 174 e 175);
          </li>
          <li className="font-akkurat-regular">
            <strong className="font-akkurat-bold">Tabela 14.24</strong> – Análise descritiva das síndromes cromáticas
            por idade – administração tradicional (página 198).
          </li>
        </ul>
        <p className="font-akkurat-regular">
          Os manuais atualmente em circulação continuam válidos, desde que as tabelas corrigidas sejam utilizadas em
          substituição às originais.
        </p>
        <a href="/tabelas.pdf" download>
          <Button
            variant="outline"
            className="mb-16 sm:mb-20 mt-4 bg-transparent font-akkurat-regular w-full sm:w-auto"
          >
            Acesse aqui
          </Button>
        </a>
        {/* Texto com largura 90% ocupando toda a tela */}
        <div className="w-full sm:w-[90%]">
          <p className="font-akkurat-regular">
            Nos sistemas de correção informatizada, os dados dessas tabelas já foram atualizados.
          </p>
        </div>
        {/* Grid 2/3 para texto e 1/3 para imagem */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-6 items-start mt-6 sm:mt-8">
          <div className="md:col-span-2">
            <p className="font-akkurat-regular">
              A editora está trabalhando, em conjunto com os autores, em uma edição revisada do manual, que será lançada
              ainda no segundo semestre e substituirá os manuais atuais. Essa substituição será feita sem custos ou
              prejuízos para o cliente. Pedimos que preencham o seguinte formulário para realizar a troca que será feita
              ao longo do segundo semestre de 2025.
            </p>
            <Button variant="outline" className="mt-4 bg-transparent font-akkurat-regular w-full sm:w-auto">
              Preencha aqui
            </Button>
          </div>

          <div className="lg:col-span-1 flex justify-center md:justify-start mt-4 md:mt-0">
            <div className="max-w-xs sm:max-w-sm md:max-w-full flex flex-col p-4  pt-0 pl-0 rounded-lg">
              <img src="/capa.png" alt="Capa do manual" className="w-full h-56 sm:h-64 md:h-56 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
