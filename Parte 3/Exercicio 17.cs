using System;

class Program {
    static void Main(string[] args) {
        int idade;

        Console.WriteLine("Digite sua idade: ");
        idade = int.Parse(Console.ReadLine());
        verificarIdade(idade);
        Console.ReadKey();
    }
  
  static void verificarIdade(int idade) 
  {
    if(idade >= 18)
    {
      Console.WriteLine("Você é maior de Idade! e possui {0} anos de idade", idade);
    }else{
            Console.WriteLine("Você tem apenas {0} anos de idade e não é maior de idade.", idade);
    }
  }
}