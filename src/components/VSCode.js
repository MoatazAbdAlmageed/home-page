import React from "react";
import Table from "react-bootstrap/Table";
import VSCodeShortcuts from "../data/vscode.json";
import reactSnippets from "../data/react-js-snippets.json";
export default function VSCode() {
  return (
    <div>
      <h1>Vscode most used shortcuts</h1>
      <Table striped bordered hover>
        <thead>
          <th>Action</th>
          <th>Shortcut</th>
        </thead>
        <tbody>
          {VSCodeShortcuts.map(({ action, shortcut }) => {
            return (
              <tr>
                <td>{action}</td>
                <td>{shortcut}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <h1>React Snippets</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Prefix</th>
            <th>Method</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>imr→</code>
            </td>
            <td>
              <code>{`import React from 'react'`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>imrd→</code>
            </td>
            <td>
              <code>{`import ReactDOM from 'react-dom'`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>imrc→</code>
            </td>
            <td>
              <code>{`import React, { Component } from 'react'`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>imrcp→</code>
            </td>
            <td>
              <code>
                {`import React, { Component } from 'react' &amp; import PropTypes from 'prop-types'`}
              </code>
            </td>
          </tr>
          <tr>
            <td>
              <code>imrpc→</code>
            </td>
            <td>
              <code>{`import React, { PureComponent } from 'react'`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>imrpcp→</code>
            </td>
            <td>
              <code>
                {`import React, { PureComponent } from 'react' &amp; import PropTypes from 'prop-types'`}
              </code>
            </td>
          </tr>
          <tr>
            <td>
              <code>imrm→</code>
            </td>
            <td>
              <code>{`import React, { memo } from 'react'`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>imrmp→</code>
            </td>
            <td>
              <code>
                {`import React, { memo } from 'react' &amp; import PropTypes from 'prop-types'`}
              </code>
            </td>
          </tr>
          <tr>
            <td>
              <code>impt→</code>
            </td>
            <td>
              <code>{`import PropTypes from 'prop-types'`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>imrr→</code>
            </td>
            <td>
              <code>
                {`import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'`}
              </code>
            </td>
          </tr>
          <tr>
            <td>
              <code>imbr→</code>
            </td>
            <td>
              <code>
                {`import { BrowserRouter as Router} from 'react-router-dom'`}
              </code>
            </td>
          </tr>
          <tr>
            <td>
              <code>imbrc→</code>
            </td>
            <td>
              <code>
                {`import { Route, Switch, NavLink, Link } from react-router-dom'`}
              </code>
            </td>
          </tr>
          <tr>
            <td>
              <code>imbrr→</code>
            </td>
            <td>
              <code>{`import { Route } from 'react-router-dom'`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>imbrs→</code>
            </td>
            <td>
              <code>{`import { Switch } from 'react-router-dom'`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>imbrl→</code>
            </td>
            <td>
              <code>{`import { Link } from 'react-router-dom'`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>imbrnl→</code>
            </td>
            <td>
              <code>{`import { NavLink } from 'react-router-dom'`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>imrs→</code>
            </td>
            <td>
              <code>{`import React, { useState } from 'react'`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>imrse→</code>
            </td>
            <td>
              <code>
                {`import React, { useState, useEffect } from 'react'`}
              </code>
            </td>
          </tr>
          <tr>
            <td>
              <code>redux→</code>
            </td>
            <td>
              <code>{`import { connect } from 'react-redux'`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>rconst→</code>
            </td>
            <td>
              <code>{`constructor(props) with this.state`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>rconc→</code>
            </td>
            <td>
              <code>{`constructor(props, context) with this.state`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>est→</code>
            </td>
            <td>
              <code>{`this.state = { }`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>cwm→</code>
            </td>
            <td>
              <code>{`componentWillMount = () =&gt;`}</code> DEPRECATED!!!
            </td>
          </tr>
          <tr>
            <td>
              <code>cdm→</code>
            </td>
            <td>
              <code>{`componentDidMount = () =&gt; `}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>cwr→</code>
            </td>
            <td>
              <code>{`componentWillReceiveProps = (nextProps) =&gt;`}</code>{" "}
              DEPRECATED!!!
            </td>
          </tr>
          <tr>
            <td>
              <code>scu→</code>
            </td>
            <td>
              <code>
                {`shouldComponentUpdate = (nextProps, nextState) =&gt;`}
              </code>
            </td>
          </tr>
          <tr>
            <td>
              <code>cwup→</code>
            </td>
            <td>
              <code>
                {" "}
                {`componentWillUpdate = (nextProps, nextState) =&gt;`}
              </code>{" "}
              DEPRECATED!!!
            </td>
          </tr>
          <tr>
            <td>
              <code>cdup→</code>
            </td>
            <td>
              <code>
                {" "}
                {`componentDidUpdate = (prevProps, prevState) =&gt;`}
              </code>
            </td>
          </tr>
          <tr>
            <td>
              <code>cwun→</code>
            </td>
            <td>
              <code> {`componentWillUnmount = () =&gt;`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>gdsfp→</code>
            </td>
            <td>
              <code>
                {" "}
                {`static getDerivedStateFromProps(nextProps, prevState)`}
              </code>
            </td>
          </tr>
          <tr>
            <td>
              <code>gsbu→</code>
            </td>
            <td>
              <code>
                {" "}
                {`getSnapshotBeforeUpdate = (prevProps, prevState) =&gt;`}
              </code>
            </td>
          </tr>
          <tr>
            <td>
              <code>ren→</code>
            </td>
            <td>
              <code>{`render() { return( ) }`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>sst→</code>
            </td>
            <td>
              <code>{`this.setState({ })`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>ssf→</code>
            </td>
            <td>
              <code>{`this.setState((state, props) =&gt; return { })`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>props→</code>
            </td>
            <td>
              <code>{`this.props.propName`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>state→</code>
            </td>
            <td>
              <code>{`this.state.stateName`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>rcontext→</code>
            </td>
            <td>
              <code>{`const $ {1:contextName} = React.createContext()`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>cref→</code>
            </td>
            <td>
              <code>{`this.$ {1:refName}Ref = React.createRef()`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>fref→</code>
            </td>
            <td>
              <code>{`const ref = React.createRef()`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>bnd→</code>
            </td>
            <td>
              <code>{`this.methodName = this.methodName.bind(this)`}</code>
            </td>
          </tr>
        </tbody>
      </Table>
      <h2>Console</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Prefix</th>
            <th>Method</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>clg→</code>
            </td>
            <td>
              <code>{`console.log(object)`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>clo→</code>
            </td>
            <td>
              <code>{`console.log("object", object)`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>ctm→</code>
            </td>
            <td>
              <code>{`console.time("timeId")`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>cte→</code>
            </td>
            <td>
              <code>{`console.timeEnd("timeId")`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>cas→</code>
            </td>
            <td>
              <code>{`console.assert(expression,object)`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>ccl→</code>
            </td>
            <td>
              <code>{`console.clear()`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>cco→</code>
            </td>
            <td>
              <code>{`console.count(label)`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>cdi→</code>
            </td>
            <td>
              <code>{`console.dir`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>cer→</code>
            </td>
            <td>
              <code>{`console.error(object)`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>cgr→</code>
            </td>
            <td>
              <code>{`console.group(label)`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>cge→</code>
            </td>
            <td>
              <code>{`console.groupEnd()`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>ctr→</code>
            </td>
            <td>
              <code>{`console.trace(object)`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>cwa→</code>
            </td>
            <td>
              <code>{`console.warn`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>cin→</code>
            </td>
            <td>
              <code>{`console.info`}</code>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
