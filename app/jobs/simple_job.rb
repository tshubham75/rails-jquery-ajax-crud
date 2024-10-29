class SimpleJob < ApplicationJob
  queue_as :default

  around_perform :around_perform_example
  around_enqueue :around_perform_example
  
  def perform(*args)
    puts "SimpleJob perform started #{args.inspect}"
  end

  private

  def around_perform_example
    #get executed before perform
    Rails.logger.info "hello"
    yield
    #get executed after perform
    Rails.logger.info "bye"
  end

end
