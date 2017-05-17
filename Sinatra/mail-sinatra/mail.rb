require 'sinatra'
require 'sendgrid-ruby'

get '/' do

	erb :index
end

get '/contact' do


	@from_email = params[:from]
	@subject_email = params[:subject]
	@content_email = params[:content]

	from = SendGrid::Email.new(email: @from_email)
	subject = @subject_email
	to = SendGrid::Email.new(email: "chris.foster@nycda.com")
	content = SendGrid::Content.new(type: 'text/plain', value: @content_email)

	mail = SendGrid::Mail.new(from, subject, to, content)
	#
	sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
	#
	# p mail

	response = sg.client.mail._('send').post(request_body: mail.to_json)
	erb :thank_you
	# puts response.status_code
	# puts response.body

end
