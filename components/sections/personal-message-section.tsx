export function PersonalMessageSection() {
  return (
    <section className="bg-muted text-muted-foreground p-8">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold gold-accent">Un mensaje especial ♡</h2>

        <div className="bg-card p-6 rounded-lg shadow-md">
          <p className="text-lg leading-relaxed text-card-foreground italic">
            "Llegan mis 15 años y no puedo estar más feliz de compartir este momento con ustedes. 
            Gracias por el amor que me dan cada día, por los abrazos, las risas, los consejos y 
            todos los recuerdos que guardo en mi corazón. Cada uno forma parte de mi historia, 
            y me siento muy afortunada de tenerlos cerca. Esta fiesta no sería lo mismo sin ustedes, porque 
            lo más lindo no es el vestido ni la música, sino verlos sonreír conmigo. Los quiero con todo mi alma, 
            gracias por hacerme sentir tan especial."
          </p>

          <div className="mt-6 flex justify-center">
            <div className="text-center">
              <p className="gold-accent font-semibold">Con amor</p>
              <p className="text-sm text-muted-foreground mt-1">Lupe y familia Toledo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
