import React , {Component}  from 'react';
export default class Messages extends Component{
    handleSubmit(e){
        e.preventDefault();
        this.props.addNewMessage('@anonym' , this.input.value, Date.now());
        this.input.value = '';
    }
    render(){
        return(
            <div>
                {this.props.messages.map((m) => {
                    return (
                        <div>
                            <p>{m.author}</p>
                            <p>{m.text}</p>
                            <p>{m.datetime}</p>
                        </div>
                    )
                })}
                <form onSubmit={this.handleSubmit.bind(this)} action='#'>
                    <input type='text' ref={(input) => this.input = input}/>
                    <button type='submit'>Send</button>
                </form>
            </div>
        );
    }
}