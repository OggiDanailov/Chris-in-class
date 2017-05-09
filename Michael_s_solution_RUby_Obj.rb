# Create a User class and a Moderator class. One of these should inherit from the other. Create four methods and put them in the appropriate class:
#
# create_comment, delete_comment, flag_comment, mute_user
#
# Then, create a Comment class that allows the User/Moderator methods to work as intended.

class User
    attr_accessor :mute

    def initialize
        @mute = false
        @flag_comment = true
    end

    def create_comment comment_name, text
        Comment.new(comment_name, text)
    end

end

class Moderator < User
    attr_reader

    def initialize
        super()
    end


    def mute_user user
        user.mute = true
    end

    def delete_comment comment
        comment.visible = false
    end

end

class Comment
    attr_accessor :visible, :comment_name, :text

    def initialize comment_name, text
        @comment_name = comment_name
        @text = text
        @visibile = true
    end
end




mod = Moderator.new
usr = User.new

comment1 = usr.create_comment("cmt1", "this is the first comment")