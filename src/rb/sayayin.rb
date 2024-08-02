class Warrior
  attr_accessor :name, :ki
  def initialize(name:, ki:)
    @name = name
    @ki = ki
  end
  def make_technique(technique)
    puts "#{@name} make a #{technique}"
  end
end

class Sayayin<Warrior
  attr_accessor :phase
  def initialize(phase:, **options)
    super(**options)
    @phase = phase
  end

  def transform_to(phase:, ki:)
    @phase = phase
    @ki = ki
    "Now, I'm in #{@phase} phase"
  end
end

vegueta = Sayayin.new(name: 'Vegueta', ki: 3000, phase: 'base')

puts vegueta.make_technique('Final Flash')
puts vegueta.phase
puts vegueta. ki
puts vegueta.transform_to(phase: 'Super Sayayin', ki: 5000)
puts vegueta.phase
puts vegueta.ki
